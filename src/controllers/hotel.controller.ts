import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service";
import { NotFoundError } from "../utils/errors/app.error";

export const createHotelHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelData = req.body;
        const hotelResponse = await createHotelService(hotelData);
        res.status(201).json({
            message: "Hotel created successfully",
            data: hotelResponse,
            success: true,
        });
    } catch (error) {
        next(error);
    }
}

export const getHotelByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelId = parseInt(req.params.id);
        const hotelResponse = await getHotelByIdService(hotelId);
        if (!hotelResponse) {
            throw new NotFoundError("Hotel not found");
        }
        res.status(200).json({
            message: "Hotel retrieved successfully",
            data: hotelResponse,
            success: true,
        });
    } catch (error) {
        next(error);
    }
}