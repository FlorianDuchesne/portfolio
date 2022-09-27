<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BasicController extends AbstractController
{
    /**
     * @Route("/", name="app_basic")
     */
    public function index(): Response
    {
        return $this->render('/base.html.twig');
    }
}
