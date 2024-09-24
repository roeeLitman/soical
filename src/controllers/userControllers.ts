import exp, {Router, Request, Response} from 'express'

const router: Router = exp.Router()

router.post("/register", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});

router.post("/follow", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});

router.get("/search", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});

router.get("/profile", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});

router.get("/following", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});


export default router