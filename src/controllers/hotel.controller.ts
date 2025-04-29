import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service";
import { NotFoundError } from "../utils/errors/app.error";
import { StatusCodes } from "http-status-codes";

export const createHotelHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelData = req.body;
        const hotelResponse = await createHotelService(hotelData);
        res.status(StatusCodes.CREATED).json({
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
        res.status(StatusCodes.OK).json({
            message: "Hotel retrieved successfully",
            data: hotelResponse,
            success: true,
        });
    } catch (error) {
        next(error);
    }
}

export const getAllHotelsHandler = async (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.NOT_IMPLEMENTED)
}


export const updateHotelHandler = async (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.NOT_IMPLEMENTED)
}

export const deleteHotelHandler = async (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.NOT_IMPLEMENTED)
}