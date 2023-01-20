<?php

namespace App\Controller\Admin;

use App\Form\PictureType;
use App\Entity\ChroniqueJapon;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ChroniqueJaponCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ChroniqueJapon::class;
    }

    public function configureFields(string $pageName): iterable
    {

        return [
            TextField::new('titre'),
            TextField::new('imageFile')->setFormType(VichImageType::class)->onlyOnForms(),
            ImageField::new('fichier')->setBasePath('/japon/elements_graphiques/ronds/')->onlyOnIndex(),
            CollectionField::new('pages')
            ->setEntryType(PictureType::class)
            ->onlyOnForms(),
        ];
    }
}
