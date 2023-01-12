<?php

namespace App\Controller;

use App\Entity\About;
use App\Entity\Competences;
use App\Entity\Curriculum;
use App\Repository\AboutRepository;
use App\Repository\CompetencesRepository;
use App\Repository\CurriculumRepository;
use App\Repository\ExperiencesRepository;
use App\Repository\FormationsRepository;
use App\Repository\ProjetRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BasicController extends AbstractController
{
    /**
     * @Route("/portfolio", name="app_basic")
     */
    public function index(AboutRepository $aboutRepo, 
    CompetencesRepository $compRepo, 
    CurriculumRepository $cvRepo, 
    ExperiencesRepository $expRepo,
    FormationsRepository $formRepo,
    ProjetRepository $projetRepo): Response
    {
        $about = $aboutRepo->findOneBy([],['id' => 'DESC']);
        $competences = $compRepo->findAll();
        $cv = $cvRepo->findOneBy([],['id' => 'DESC']);
        $exp = $expRepo->findAll();
        $formations = $formRepo->findAll();
        $projets = $projetRepo->findAll();

        return $this->render('/portfolio.html.twig', [
            'about' => $about,
            'competences' => $competences,
            'cv' => $cv,
            'experiences' => $exp,
            'formations' => $formations,
            'projets' => $projets
        ]);
    }

    /**
     * @Route("/", name="accueil")
     */
    public function home():Response {

        return $this->render('/accueil.html.twig');
    }

    /**
     * @Route("/chroniquesjapon", name="japon")
     */
    public function japon():Response {

        return $this->render('/chroniquesJapon/index.html.twig');
    }

    /**
     * @Route("/superfantome", name="superfantome")
     */
    public function superFantome():Response {

        return $this->render('/superfantome/index.html.twig');
    }

        /**
     * @Route("/superfantome/lecture", name="sf_lecture")
     */
    public function superFantome_lecture():Response {

        return $this->render('/superfantome/lecture.html.twig');
    }

        /**
     * @Route("/superfantome/liens", name="sf_liens")
     */
    public function superFantome_liens():Response {

        return $this->render('/superfantome/liens.html.twig');
    }

        /**
     * @Route("/superfantome/apropos", name="sf_apropos")
     */
    public function superFantome_apropos():Response {

        return $this->render('/superfantome/apropos.html.twig');
    }

}
