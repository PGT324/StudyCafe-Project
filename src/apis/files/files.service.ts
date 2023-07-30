import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { FileUpload } from 'graphql-upload';

@Injectable()
export class FilesService {
  async upload(file: FileUpload): Promise<string> {
    console.log(file);

    const storage = new Storage({
      // id
      projectId: 'first-393806',
      // 스토리지 json파일 이름
      keyFilename: 'gcp-storage.json',
      //bucket이름
    }).bucket('first_storage_230724');

    await new Promise((resolve, reject) => {
      file
        .createReadStream()
        .pipe(storage.file(file.filename).createWriteStream())
        .on('finish', () => {
          console.log('파일업로드 성공!');
          resolve('성공');
        })
        .on('error', () => {
          console.log('파일업로드 실패!');
          reject('실패');
        });
    });

    console.log('파일 전송 완료!');
    return '끝';
  }
}
