const LinkedList = require('../server/linkedList/linkedList');

describe('Testing LinkedList implementation', () => {
    let ll = null;
    beforeEach(() => { 
        ll = new LinkedList(); 
        ll.enqueue(1);
        ll.enqueue(2);
    });
    describe('Enqueue Prototype', () => {
        test('Appends to list correctly', () => {
            expect(ll.head.value).toBe(1);
            expect(ll.head.next.value).toBe(2);
        });
    });
    describe('Dequeue Prototype', () => {
        test('Removes from list correctly', () => {
            expect(ll.dequeue()).toBe(1);
            expect(ll.head.value).toBe(2);
        });
        test('Dequeue returns null when size is already at 0', () => {
            expect(ll.dequeue()).toBe(1);
            expect(ll.dequeue()).toBe(2);
            expect(ll.dequeue()).toEqual(null);
        });
    });
    describe('Size of LinkedList', () => {
        test('Size changes correctly as list grows and shrinks', () => {
            expect(ll.size).toBe(2);
            ll.enqueue(3);
            expect(ll.size).toBe(3);
            ll.dequeue();
            expect(ll.size).toBe(2);
        });
        test('Size does not go below 0', () => {
            ll.dequeue();
            expect(ll.size).toBe(1);
            ll.dequeue();
            expect(ll.size).toBe(0);
            ll.dequeue();
            expect(ll.size).toBe(0);
            ll.enqueue(1);
            expect(ll.size).toBe(1);
        });
    });
    describe('isEmpty Prototype', () => {
        test('Returns false when there are items', () => {
            expect(ll.isEmpty()).toBe(false);
        });
        test('Returns true when there are no items', () => {
            ll.dequeue();
            ll.dequeue();
            expect(ll.isEmpty()).toBe(true);
        });
    });
    afterEach(() => { ll = null; });
});