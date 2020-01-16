import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('Profile status component', () => {
	test('Status from props should be in the state', () => {
		const component = create(<ProfileStatus profileStatus={'Hello status!'}/>);
		const instance = component.getInstance();
		expect(instance.state.profileStatus).toBe('Hello status!');
	});
	test('After creation <span> with status should be displayed with correct status', () => {
		const component = create(<ProfileStatus profileStatus={'Hello status!'}/>);
		const root = component.root;
		let span = root.findByType('span');
		expect(span.length).toBe(1);
	});
	test('After creation <span> with status should be displayed', () => {
		const component = create(<ProfileStatus profileStatus={'Hello status!'}/>);
		const root = component.root;
		let span = root.findByType('span');
		expect(span).not.toBeNull();
	});
});