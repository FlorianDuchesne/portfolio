<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220902100129 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE about (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, contenu CLOB NOT NULL)');
        $this->addSql('CREATE TABLE competences (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, intitule VARCHAR(50) NOT NULL)');
        $this->addSql('CREATE TABLE curriculum (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, localisation VARCHAR(255) NOT NULL, name VARCHAR(50) NOT NULL)');
        $this->addSql('CREATE TABLE experiences (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, intitule VARCHAR(100) NOT NULL, lieu VARCHAR(50) NOT NULL, nature_poste VARCHAR(100) NOT NULL, annee VARCHAR(10) NOT NULL)');
        $this->addSql('CREATE TABLE formations (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, intitule VARCHAR(100) NOT NULL, lieu VARCHAR(50) NOT NULL, annee VARCHAR(10) NOT NULL)');
        $this->addSql('CREATE TABLE picture (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, localisation VARCHAR(255) DEFAULT NULL)');
        $this->addSql('CREATE TABLE projet (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, intitule VARCHAR(50) NOT NULL, texte CLOB NOT NULL, lien_git VARCHAR(255) DEFAULT NULL, lien_web VARCHAR(255) DEFAULT NULL)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE about');
        $this->addSql('DROP TABLE competences');
        $this->addSql('DROP TABLE curriculum');
        $this->addSql('DROP TABLE experiences');
        $this->addSql('DROP TABLE formations');
        $this->addSql('DROP TABLE picture');
        $this->addSql('DROP TABLE projet');
    }
}
