import React from 'react'
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';
describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='status'/>)
        const instance = component.getInstance();
        expect(instance.props.status).toBe('status')
    })

    test('the status <span> should be displayed after startup', () => {
        const component = create(<ProfileStatus status='status'/>)
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('the status <input> should not be displayed after startup', () => {
        const component = create(<ProfileStatus status='status'/>)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test('the status <input> should be displayed after double click instead of span', () => {
        const component = create(<ProfileStatus status='status'/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')
        expect(input.props.value).toBe('status')
    })

    test('the status span should be displayed with text="status" after startup', () => {
        const component = create(<ProfileStatus status='status'/>)
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('status')
    })

    test('callback should be called', () => {
        let mocCallBack = jest.fn()
        const component = create(<ProfileStatus status='status' updateStatus={mocCallBack}/>)
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mocCallBack.mock.calls.length).toBe(1)
    })
})