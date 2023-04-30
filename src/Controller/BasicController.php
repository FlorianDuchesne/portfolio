<?php

namespace App\Controller;

use App\Entity\About;
use App\Entity\ChroniqueJapon;
use App\Entity\Competences;
use App\Entity\Curriculum;
use App\Repository\AboutRepository;
use App\Repository\ChroniqueJaponRepository;
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
     * @Route("/portfolio/", name="app_basic")
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
     * @Route("/chroniquesjapon/", name="japon")
     */
    public function japonIndex(ChroniqueJaponRepository $repo):Response {

        return $this->render('/chroniquesJapon/index.html.twig', [
            'chroniques' => $repo->findAll(),
        ]);
    }

    /**
     * @Route("/chroniquesjapon/Apropos/", name="japon_apropos")
     */
    public function japonApropos():Response {

        return $this->render('/chroniquesJapon/Apropos.html.twig');
    }

    /**
     * @Route("/chroniquesjapon/Liens/", name="japon_liens")
     */
    public function japonLiens():Response {

        return $this->render('/chroniquesJapon/Liens.html.twig');
    }

    /**
     * @Route("/chroniquesjapon/contact/", name="japon_contact")
     */
    public function japonContact():Response {

        return $this->render('/chroniquesJapon/contact.html.twig');
    }

    /**
     * @Route("/chroniquesjapon/{chronique}/", name="japon_lecture")
     * @Route("/chroniquesjapon/end/", name="japon_end")
     */
    public function japonLecture(ChroniqueJapon $chronique = null, ChroniqueJaponRepository $repo):Response {

        if ($chronique !== null){
            $chroniqueSuivante = $repo->findOneBy(['id' => ($chronique->getId() + 1)]);
            if (!$chroniqueSuivante){
                $chroniqueSuivante = null;
            } else {
                $chroniqueSuivante = $chroniqueSuivante->getId();
            }
            $pages = $chronique->getPages();
        } else {
            $chroniqueSuivante = null;
            $pages = null;
        }

        return $this->render('/chroniquesJapon/lecture.html.twig', [
            'chronique' => $chronique,
            'pages' => $pages,
            'chroniqueSuivante' => $chroniqueSuivante,
        ]);
    }

    /**
     * @Route("/superfantome/", name="superfantome")
     */
    public function superFantome():Response {

        return $this->render('/superfantome/index.html.twig');
    }

        /**
     * @Route("/superfantome/lecture/", name="sf_lecture")
     */
    public function superFantomeLecture():Response {

        return $this->render('/superfantome/lecture.html.twig');
    }

        /**
     * @Route("/superfantome/liens/", name="sf_liens")
     */
    public function superFantomeLiens():Response {

        return $this->render('/superfantome/liens.html.twig');
    }

    /**
     * @Route("/superfantome/apropos/", name="sf_apropos")
     */
    public function superFantomeApropos():Response {

        return $this->render('/superfantome/apropos.html.twig');
    }

        /**
     * @Route("/superfantome/contact/", name="sf_contact")
     */
    public function superFantomeContact():Response {

        return $this->render('/superfantome/contact.html.twig');
    }


}
