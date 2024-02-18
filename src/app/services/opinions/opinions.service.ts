import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpinionsService {
  constructor(private firestore: AngularFirestore) {}

  async addOpinion(name: string, message: string) {
    return this.firestore.collection('opinions').add({
      name: name,
      message: message,
      timestamp: new Date(),
    });
  }

  getOpinions(): Observable<any[]> {
    return this.firestore
      .collection('opinions', (ref) => ref.orderBy('timestamp', 'desc'))
      .valueChanges();
  }
}
