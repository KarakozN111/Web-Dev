
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Album, Images} from "./album";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AlbumsService {
  constructor(private http: HttpClient) { }
  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>('https://jsonplaceholder.typicode.com/albums', album);
  }
  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}/`)
  }
  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getImages(id: number): Observable<Images[]>{
    return this.http.get<Images[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }
}