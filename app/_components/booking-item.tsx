import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const BookingItem = () => {
  return (
    <Card>
      <CardContent className='p-5 py-0 flex justify-between'>
        <div className='flex flex-col gap-2 py-5'>
          <Badge className='bg-[#221C30] text-primary hover:bg-[#221C30] w-fit'>
            Confirmed
          </Badge>
          <h2 className='font-bold'>Haircut</h2>

          <div className='flex items-center gap-2'>
            <Avatar className='h-6 w-6'>
              <AvatarImage src='https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png' />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <h3 className='text-sm'>Vintage Barber</h3>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center border-l border-solid border-secondary px-3'>
          <p>Fevereiro</p>
          <p className='text-2xl'>06</p>
          <p className='text-sm'>09h45</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
