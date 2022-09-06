<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220905090824 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE projet_competences (projet_id INTEGER NOT NULL, competences_id INTEGER NOT NULL, PRIMARY KEY(projet_id, competences_id), CONSTRAINT FK_1A23F0C18272 FOREIGN KEY (projet_id) REFERENCES projet (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_1A23F0A660B158 FOREIGN KEY (competences_id) REFERENCES competences (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_1A23F0C18272 ON projet_competences (projet_id)');
        $this->addSql('CREATE INDEX IDX_1A23F0A660B158 ON projet_competences (competences_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__picture AS SELECT id, name, localisation FROM picture');
        $this->addSql('DROP TABLE picture');
        $this->addSql('CREATE TABLE picture (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, projet_id INTEGER DEFAULT NULL, name VARCHAR(255) NOT NULL, localisation VARCHAR(255) DEFAULT NULL, CONSTRAINT FK_16DB4F89C18272 FOREIGN KEY (projet_id) REFERENCES projet (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO picture (id, name, localisation) SELECT id, name, localisation FROM __temp__picture');
        $this->addSql('DROP TABLE __temp__picture');
        $this->addSql('CREATE INDEX IDX_16DB4F89C18272 ON picture (projet_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE projet_competences');
        $this->addSql('CREATE TEMPORARY TABLE __temp__picture AS SELECT id, name, localisation FROM picture');
        $this->addSql('DROP TABLE picture');
        $this->addSql('CREATE TABLE picture (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, localisation VARCHAR(255) DEFAULT NULL)');
        $this->addSql('INSERT INTO picture (id, name, localisation) SELECT id, name, localisation FROM __temp__picture');
        $this->addSql('DROP TABLE __temp__picture');
    }
}
