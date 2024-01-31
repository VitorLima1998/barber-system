import { db } from '../../_lib/prisma';
import BarbershopInfo from './_components/barbershop-info';
import ServiceItem from './_components/service-item';

interface BarbershopDetailsPageProps {
  params: {
    id: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    // TODO: redirect to home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    // TODO: redirect to home page
    return null;
  }

  return (
    <div className='px-5 flex flex-col gap-4 py-6'>
      <BarbershopInfo barbershop={barbershop} />
      {barbershop.services.map((service: any) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
};

export default BarbershopDetailsPage;