import { useMovies, useTicketsAdmin, useUsers } from '@/components/hooks/useQuery'
import type { GroupedTicket } from '@/components/interface/tickets'
import { columns } from './Columns'
import { DataTable } from './DataTable'

const TicketList = () => {
    const { data: tickets } = useTicketsAdmin()
      const { data: movies } = useMovies();
      const { data: users } = useUsers();
    
      const groupedTickets = tickets?.reduce((acc, ticket) => {
        const { bookingCode } = ticket;
        const movie = movies?.find((m) => m.id === ticket.movieId);
        const user = users?.find((u) => u.id === ticket.userId);
        if (!acc[bookingCode]) {
          acc[bookingCode] = {
            bookingCode,
            userName: user?.name,
            movieTitle: movie?.title,
            status: ticket.status,
            seats: [`${ticket.seat.seatRow}${ticket.seat.seatNumber}`],
            totalPrice: ticket.price,
          };
        } else {
          acc[bookingCode].seats.push(
            `${ticket.seat.seatRow}${ticket.seat.seatNumber}`
          );
          acc[bookingCode].totalPrice += ticket.price;
        }
        return acc;
      }, {});
      const ticketList: GroupedTicket[] = groupedTickets
        ? Object.values(groupedTickets)
        : [];
  return (
    <div className='space-y-4'>
     <h1 className="text-center text-2xl font-medium">
        <i>Danh Sách Giao Dịch</i>
      </h1>
     <DataTable columns={columns} data={ticketList}/>
    </div>
  )
}

export default TicketList
