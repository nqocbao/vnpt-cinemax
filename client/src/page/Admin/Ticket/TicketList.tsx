import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const TicketList = () => {
  return (
    <div className='space-y-4'>
        <div className="p-2 border border-gray-600">
            <div className="p-2">
                <h1>Người đặt: <strong>Minh Quân</strong></h1>
            </div>
            <div className="">
                 <Table>
                  {/* <TableCaption>Danh Sách Giao Dịch</TableCaption> */}
                  <TableHeader className="hidden md:table-header-group">
                    <TableRow>
                      <TableHead className="w-[100px]">Hóa Đơn</TableHead>
                      <TableHead>Tên Phim</TableHead>
                      <TableHead>Số Ghế</TableHead>
                      <TableHead className="text-right">Tổng</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow
                        className="block md:table-row"
                      >
                        <TableCell className="text-gray-600 md:font-medium block md:table-cell before:content-['Hóa_Đơn:_'] md:before:content-none">
                            F813819
                        </TableCell>
                        <TableCell className="text-gray-600 md:font-medium block md:table-cell before:content-['Trạng_Thái:_'] md:before:content-none">
                            Superman
                        </TableCell>
                        <TableCell className="text-gray-600 md:font-medium block md:table-cell before:content-['Trạng_Thái:_'] md:before:content-none">
                            E5,E6
                        </TableCell>
                        <TableCell className="text-gray-600 md:font-medium text-right block md:table-cell before:content-['Tổng:_'] md:before:content-none">
                            256.000 vnđ
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
            </div>
        </div>
    </div>
  )
}

export default TicketList
