<?php

namespace App\Repository;

use App\Entity\ChroniqueJapon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ChroniqueJapon>
 *
 * @method ChroniqueJapon|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChroniqueJapon|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChroniqueJapon[]    findAll()
 * @method ChroniqueJapon[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChroniqueJaponRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChroniqueJapon::class);
    }

    public function add(ChroniqueJapon $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ChroniqueJapon $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ChroniqueJapon[] Returns an array of ChroniqueJapon objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ChroniqueJapon
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
