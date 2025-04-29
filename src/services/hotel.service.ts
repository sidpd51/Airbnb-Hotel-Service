import { createHotelDto } from "../dto/hotel.dto";
import { createHotel, getHotelById,  } from "../repositories/hotel.repository";

export async function createHotelService(hotelData: createHotelDto) {
    try {
        const hotel = await createHotel(hotelData);
        return hotel;
    } catch (error) {
        throw error;
    }
}

export async function getHotelByIdService(id: number) {
    try {
        const hotel = await getHotelById(id);
        return hotel;
    } catch (error) {
        throw error;
    }
}