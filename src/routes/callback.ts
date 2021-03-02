import { Request, Response, NextFunction } from "express";
import { Code } from '../models/auth';
import { BOT_URL } from '../util/secrets';
import logger from '../util/logging';

export const callbackRoute = async (req: Request, res: Response, next: NextFunction) => {
    const botUrl = BOT_URL;
    let url: string;
    try {
        if (req.query.error) return res.send("Cancelled");
        const userIp = req.connection.remoteAddress;
        let code = await Code.findOneAndUpdate({ ip: userIp }, {
            authCode: req.query.code
        }, { new: true });

        if (!code) {
            code = new Code({
                authCode: req.query.code,
                ip: userIp
            });
            await code.save();
            url = `${botUrl}${code._id}`;
            res.redirect(`https://${url}`);
        } else {            
            url = `${botUrl}${code._id}`;
            res.redirect(`https://${url}`);
        }
    } catch (err) {
        logger.log({
            level: 'info',
            message: err.message
        });
        res.status(500).json({error: 'Internal server error'});
    }
};



