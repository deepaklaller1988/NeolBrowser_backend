import { Request, Response, NextFunction } from "express";
import { FavInput, Fav } from "../model/fav";

const createUpdateFav = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { link } = req.body;

        if (!link) {
            res.status(422).json({ message: "The fields link are required", status: true, data: null });
            return;
        }

        const favInput: FavInput = { link };
        const fav = await Fav.findOne({});

        if (fav) {
            const favUpdated = await Fav.findByIdAndUpdate(fav._id, favInput, {
                new: true,
            });
            res.status(200).json({ data: favUpdated, message: "Update Successfully", status: true });
        } else {
            const favCreated = await Fav.create(favInput);
            res.status(201).json({ data: favCreated, message: "Created Successfully", status: true });
        }
    } catch (error) {
        next(error); // Pass error to the default error handler
    }
};

const getFav = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const fav = await Fav.findOne({});
        if (!fav) {
            res.status(404).json({ message: "No favorite found", status: true, data: null });
            return;
        }
        res.status(200).json({ data: fav, status: true, message: "Get Successfully" });
    } catch (error) {
        next(error); // Pass error to the default error handler
    }
};

export { createUpdateFav, getFav };
