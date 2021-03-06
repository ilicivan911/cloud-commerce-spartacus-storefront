import { TestBed, inject } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import * as ngrxStore from '@ngrx/store';
import { of } from 'rxjs';
import createSpy = jasmine.createSpy;

import * as fromStore from '../store/index';
import {
  GlobalMessageType,
  GlobalMessage
} from '../models/global-message.model';
import { GlobalMessageService } from './global-message.service';

const mockMessages = {
  [GlobalMessageType.MSG_TYPE_CONFIRMATION]: ['Confirmation'],
  [GlobalMessageType.MSG_TYPE_ERROR]: ['Error']
};

describe('GlobalMessageService', () => {
  const mockSelect = createSpy('select').and.returnValue(() =>
    of(mockMessages)
  );

  let service: GlobalMessageService;
  let store: Store<fromStore.GlobalMessageState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(
          fromStore.GLOBAL_MESSAGE_FEATURE,
          fromStore.getReducers()
        )
      ],
      providers: [GlobalMessageService]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOnProperty(ngrxStore, 'select').and.returnValue(mockSelect);
    service = TestBed.get(GlobalMessageService);
  });

  it('Should GlobalMessageService be injected', inject(
    [GlobalMessageService],
    (globalMessageService: GlobalMessageService) => {
      expect(globalMessageService).toBeTruthy();
    }
  ));

  it('Should be able to get all messages', () => {
    service.get().subscribe(results => {
      expect(results).toEqual(mockMessages);
    });
  });

  it('Should be able to add a message', () => {
    const message: GlobalMessage = {
      type: GlobalMessageType.MSG_TYPE_ERROR,
      text: 'Test error message'
    };

    service.add(message);
    expect(store.dispatch).toHaveBeenCalledWith(
      new fromStore.AddMessage(message)
    );
  });

  it('Should be able to remove a message', () => {
    service.remove(GlobalMessageType.MSG_TYPE_ERROR, 0);
    expect(store.dispatch).toHaveBeenCalledWith(
      new fromStore.RemoveMessage({
        type: GlobalMessageType.MSG_TYPE_ERROR,
        index: 0
      })
    );
  });

  it('should be able to remove messages by type', () => {
    service.remove(GlobalMessageType.MSG_TYPE_ERROR);
    expect(store.dispatch).toHaveBeenCalledWith(
      new fromStore.RemoveMessagesByType(GlobalMessageType.MSG_TYPE_ERROR)
    );
  });
});
