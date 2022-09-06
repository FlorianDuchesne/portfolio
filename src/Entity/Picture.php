<?php

namespace App\Entity;

use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use App\Repository\PictureRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PictureRepository::class)
 */
class Picture
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    // /**
    //  * NOTE: This is not a mapped field of entity metadata, just a simple property.
    //  *
    //  * @Vich\UploadableField(mapping="products", fileNameProperty="imageName", size="imageSize")
    //  *
    //  * @var File|null
    //  */
    // private $imageFile;
    
    // /**
    //  * @ORM\Column(type="integer")
    //  *
    //  * @var int|null
    //  */
    // private $imageSize;

    // /**
    //  * @ORM\Column(type="datetime")
    //  *
    //  * @var \DateTimeInterface|null
    //  */
    // private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $localisation;

    /**
     * @ORM\ManyToOne(targetEntity=Projet::class, inversedBy="pictures")
     */
    private $projet;

    // /**
    //  * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
    //  * of 'UploadedFile' is injected into this setter to trigger the update. If this
    //  * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
    //  * must be able to accept an instance of 'File' as the bundle will inject one here
    //  * during Doctrine hydration.
    //  *
    //  * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
    //  */
    // public function setImageFile(?File $imageFile = null): void
    // {
    //     $this->imageFile = $imageFile;

    //     if (null !== $imageFile) {
    //         // It is required that at least one field changes if you are using doctrine
    //         // otherwise the event listeners won't be called and the file is lost
    //         $this->updatedAt = new \DateTimeImmutable();
    //     }
    // }

    // public function getImageFile(): ?File
    // {
    //     return $this->imageFile;
    // }

    // public function setImageSize(?int $imageSize): void
    // {
    //     $this->imageSize = $imageSize;
    // }

    // public function getImageSize(): ?int
    // {
    //     return $this->imageSize;
    // }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getLocalisation(): ?string
    {
        return $this->localisation;
    }

    public function setLocalisation(?string $localisation): self
    {
        $this->localisation = $localisation;

        return $this;
    }

    public function getProjet(): ?Projet
    {
        return $this->projet;
    }

    public function setProjet(?Projet $projet): self
    {
        $this->projet = $projet;

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }
}
