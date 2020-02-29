import { IncomingMessage, ServerResponse } from 'http';
import KakaoGiftOCR from 'kakao-gift-ocr';

interface IHttpRequest extends IncomingMessage {
  body: {
    image: string;
  }
}

const printLogs = (message: string) => console.log(message);

const getCardInfo = async (image) => {
  const giftCardParser = new KakaoGiftOCR(printLogs, 'public/static/data/lang-data');
  await giftCardParser.Ready;
  const giftCard = await giftCardParser.getInfo(image);
  await giftCardParser.terminate();
  return giftCard;
};

export default async (req: IHttpRequest, res: ServerResponse) => {
  const image = req.body.image;
  const base64string = image.split(',')[1];
  const base64Buffer = Buffer.from(base64string, 'base64');

  res.setHeader('Content-Type', 'application/json');

  try {
    const result = await getCardInfo(base64Buffer);
    return res.end(
      JSON.stringify(result),
    );
  } catch (error) {
    console.log(error);
    return res.end();
  }
};
