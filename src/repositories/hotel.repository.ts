import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDto } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData:createHotelDto) {
    try {
        const hotel = await Hotel.create(hotelData);
        logger.info(`Hotel created successfully with ID: ${hotel.id}`);
        return hotel;
    } catch (error) {
        
    }
}

export async function getHotelById(id: number) {
    try {
        const hotel = await Hotel.findByPk(id);
        if (!hotel) {
            logger.warn(`Hotel with ID: ${id} not found`);
            throw new NotFoundError(`Hotel with ID: ${id} not found`);
        }
        return hotel;
    } catch (error) {
        logger.error(`Error fetching hotel with ID: ${id}`, error);
    }
}