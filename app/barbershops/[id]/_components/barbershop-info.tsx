'use client';
import Image from 'next/image';
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react';
import { Button } from '../../../_components/ui/button';
import { Barbershop } from '@prisma/client';
import { useRouter } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../../../_components/ui/sheet';
import SideMenu from '../../../_components/side-menu';

interface BarberShopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarberShopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <div>
      <div className='h-[250px] w-full relative'>
        <Button
          onClick={handleBackClick}
          size='icon'
          variant='outline'
          className='absolute z-50 top-4 left-4'
        >
          <ChevronLeftIcon />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size='icon'
              variant='outline'
              className='absolute z-50 top-4 right-4'
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className='p-0'>
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image
          fill
          src={barbershop.imageUrl}
          alt={barbershop.name}
          style={{ objectFit: 'cover' }}
          className='opacity-75'
        />
      </div>

      <div className='px-5 py-3 pb-6 border-b border-solid border-secondary'>
        <h1 className='text-xl font-bold'>{barbershop.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
          <MapPinIcon className='text-primary' size={18} />
          <p className='text-sm'>{barbershop.address}</p>
        </div>
        <div className='flex items-center gap-1 mt-2'>
          <StarIcon className='text-primary' size={18} />
          <p className='text-sm'>5.0 (899 assessments)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
