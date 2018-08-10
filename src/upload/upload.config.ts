import * as multer from 'multer';
import * as path from 'path';

/**CONFIG VISUALS */
const storageVisual = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './medias/visuals/');
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`);
    }
});
export const uploadVisual = multer({
    storage: storageVisual,
    fileFilter: (req, file, cb) => {
        const types = /jpeg|jpg|png/;
        const extensionName = types.test(path.extname(file.originalname).toLowerCase());
        if (extensionName) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});
/**CONFIG QRCODE */
const storageQrCode = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './medias/qrcode/');
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`);
    }
});
export const uploadQrCode = multer({
    storage: storageQrCode,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extensionName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        if (extensionName) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});
/**CONFIG VIDEOS */
const storageVideos = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './medias/videos/');
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`);
    }
});
export const uploadVideos = multer({
    storage: storageVideos,
    fileFilter: (req, file, cb) => {
        const fileTypes = /mp4|avi|mkv/;
        const extensionName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        if (extensionName) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});
/**CONFIG BROCHURE */
const storagePdf = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './medias/brochures/');
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`);
    }
});
export const uploadBrochures = multer({
    storage: storagePdf,
    fileFilter: (req, file, cb) => {
        const fileTypes = /pdf|PDF/;
        const extensionName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        if (extensionName) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});
