import { Service } from '@prisma/client';
import { Card, CardContent } from '../../../_components/ui/card';
import Image from 'next/image';
import { Button } from '../../../_components/ui/button';

interface ServiceItemProps {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className='p-3'>
        <div className='flex gap-4 items-center'>
          <div className='relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]'>
            <Image
              fill
              className='rounded-lg'
              src={service.imageUrl}
              alt={service.name}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className='flex flex-col w-full'>
            <h2 className='font-bold'>{service.name}</h2>
            <p className='text-sm text-gray-400'>{service.description}</p>

            <div className='flex items-center justify-between mt-3'>
              <p className='text-primary text-sm font-bold'>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(Number(service.price))}
              </p>
              <Button variant='secondary'>schedule</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;