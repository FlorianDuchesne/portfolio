<?php

namespace App\Controller\Admin;

use App\Entity\Competences;
use App\Entity\ChroniqueJapon;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        // return parent::index();
        return $this->render('admin/index.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Portfolio');
    }

    public function configureAssets(): Assets
    {
        return parent::configureAssets()
            ->addWebpackEncoreEntry('admin');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('About', 'fas fa-pen', About::class)
            ->setController(AboutCrudController::class);
        yield MenuItem::linkToCrud('Competences', 'fas fa-medal', Competences::class)
            ->setController(CompetencesCrudController::class);
        yield MenuItem::linkToCrud('Experiences', 'fas fa-star', Experiences::class)
            ->setController(ExperiencesCrudController::class);
        yield MenuItem::linkToCrud('Formations', 'fas fa-school', Formations::class)
            ->setController(FormationsCrudController::class);
        yield MenuItem::linkToCrud('Curriculum', 'fas fa-envelope', Curriculum::class)
            ->setController(CurriculumCrudController::class);
        yield MenuItem::linkToCrud('Picture', 'fas fa-image', Picture::class)
            ->setController(PictureCrudController::class);
        yield MenuItem::linkToCrud('Projet', 'fas fa-check', Projet::class)
            ->setController(ProjetCrudController::class);
        yield MenuItem::linkToCrud('ChroniqueJapon', 'fas fa-book', ChroniqueJapon::class)
            ->setController(ChroniqueJaponCrudController::class);

    }
}
