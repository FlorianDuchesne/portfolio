<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220908141241 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__picture AS SELECT id, projet_id, name, localisation, image_size, updated_at FROM picture');
        $this->addSql('DROP TABLE picture');
        $this->addSql('CREATE TABLE picture (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, projet_id INTEGER DEFAULT NULL, name VARCHAR(255) NOT NULL, localisation VARCHAR(255) DEFAULT NULL, image_size INTEGER NOT NULL, updated_at DATETIME NOT NULL, CONSTRAINT FK_16DB4F89C18272 FOREIGN KEY (projet_id) REFERENCES projet (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO picture (id, projet_id, name, localisation, image_size, updated_at) SELECT id, projet_id, name, localisation, image_size, updated_at FROM __temp__picture');
        $this->addSql('DROP TABLE __temp__picture');
        $this->addSql('CREATE INDEX IDX_16DB4F89C18272 ON picture (projet_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__picture AS SELECT id, projet_id, name, image_size, updated_at, localisation FROM picture');
        $this->addSql('DROP TABLE picture');
        $this->addSql('CREATE TABLE picture (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, projet_id INTEGER DEFAULT NULL, name VARCHAR(255) NOT NULL, image_size INTEGER DEFAULT NULL, updated_at DATETIME DEFAULT NULL, localisation VARCHAR(255) DEFAULT NULL, CONSTRAINT FK_16DB4F89C18272 FOREIGN KEY (projet_id) REFERENCES projet (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO picture (id, projet_id, name, image_size, updated_at, localisation) SELECT id, projet_id, name, image_size, updated_at, localisation FROM __temp__picture');
        $this->addSql('DROP TABLE __temp__picture');
        $this->addSql('CREATE INDEX IDX_16DB4F89C18272 ON picture (projet_id)');
    }
}
