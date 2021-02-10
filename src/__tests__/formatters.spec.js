import { getColorAndBackground, getInitials, getUrl } from '../formatters'

describe('getColorAndBackground', () => {
	it('returns light bg', () => {
		expect(getColorAndBackground('f'.repeat(32))).toEqual({
			color: '#222',
			background: `rgb(${[0xff, 0xff, 0xff]})`,
		})
	})

	it('returns dark bg', () => {
		expect(getColorAndBackground('0'.repeat(32))).toEqual({
			color: '#fff',
			background: `rgb(${[0, 0, 0]})`,
		})
	})
})

describe('getInitials', () => {
	it('Title Case', () => {
		expect(getInitials('Hello World')).toEqual('HW')
	})

	it('PascalCase', () => {
		expect(getInitials('HelloWorld')).toEqual('HW')
	})

	it('camelCase', () => {
		expect(getInitials('helloWorld')).toEqual('hW')
	})

	it('lower case', () => {
		expect(getInitials('hello world')).toEqual('hw')
	})

	it('long', () => {
		expect(getInitials('One Two Three Four')).toEqual('O')
	})

	describe('i18n', () => {
		it('Greek Title Case', () => {
			expect(getInitials('Ιωάννης Γεωργίου Βαρουφάκης')).toEqual('ΙΓΒ')
		})

		it('Greek PascalCase', () => {
			expect(getInitials('ΙωάννηςΒαρουφάκης')).toEqual('ΙΒ')
		})

		it('Chinese name', () => {
			expect(getInitials('范冰冰')).toEqual('范冰冰')
		})

		it('long Chinese name', () => {
			expect(getInitials('司徒雷登')).toEqual('司')
		})

		it('Japanese name', () => {
			expect(getInitials('宮崎 駿')).toEqual('宮崎駿')
		})

		it('long Japanese name', () => {
			expect(getInitials('野原 しんのすけ')).toEqual('野し')
		})
	})

	// https://english.stackexchange.com/questions/412943/initials-in-multiple-surnames
	describe('compound surnames', () => {
		it("Thomas O'Neill", () => {
			expect(getInitials("Thomas O'Neill")).toEqual('TO')
		})

		it('Robert McNamara', () => {
			expect(getInitials('Robert McNamara')).toEqual('RM')
		})

		it('John von Neumann', () => {
			expect(getInitials('John von Neumann')).toEqual('JvN')
		})

		it('John-Claude van Damme', () => {
			expect(getInitials('John-Claude van Damme')).toEqual('J')
		})

		it('John-Claude van Damme (maxLength 4)', () => {
			expect(getInitials('John-Claude van Damme', 4)).toEqual('JCvD')
		})
	})
})

describe('getUrl', () => {
	it('returns URL small', () => {
		expect(getUrl('0'.repeat(32), 100)).toEqual(
			'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=250&d=blank',
		)
	})

	it('returns URL large', () => {
		expect(getUrl('f'.repeat(32), 500)).toEqual(
			'https://www.gravatar.com/avatar/ffffffffffffffffffffffffffffffff?s=500&d=blank',
		)
	})
})
