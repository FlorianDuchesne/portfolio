<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('from_name', TextType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'fieldInput',
                    'placeholder' => 'votre nom',
                    'id' => 'from_name',
                ]
            ])
            ->add('user_email', EmailType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'fieldInput',
                    'placeholder' => 'votre email',
                    'id' => 'user_email'    
                ]
            ])
            ->add('message', TextareaType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'fieldInput',
                    'placeholder' => 'votre message',
                    'id' => 'message'    
                ]
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Envoyer',
                'attr' => [
                    'id' => 'button',
                    'value' => 'Envoyer'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'attr' => [
                'id' => 'contact-form',
                ]
            // Configure your form options here
        ]);
    }
}
