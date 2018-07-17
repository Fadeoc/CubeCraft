import ensureObjectProperty from '../ensureObjectProperty';

const testoa = "oa.b.c.d.e";
const testob = "ob.b.c.d.e";
const testoc = "oc.b.c.d.e";
const testod = "od.b.c.d.e";
const testoe = "oe.b.c.d.e";

const oa = {
	b: {
		c: {
			d: {
				e: 5
			}
		}
	}
};

const ob = {
	b: {
		c: {
			d: {
				d: 5
			}
		}
	}
};

const oc = null;

const od = {
	b: {
		c: {
			d: {
			}
		}
	}
};

const oe = {
	b: {
		c: {
			c: {
				e: 5
			}
		}
	}
};

describe("test", function() {

	it("normal", function() {
		expect(ensureObjectProperty(testoa, oa)).toBe(true);
	});

	it("lack property", function() {
		expect(ensureObjectProperty(testob, ob)).toBeFalsy();
	});

	it("for null", function() {
		expect(ensureObjectProperty(testoc, oc)).toBeFalsy();
	});

	it("for property undefined", function() {
		expect(ensureObjectProperty(testod, od)).toBeFalsy();
	});

	it("for parent undefined", function() {
		expect(ensureObjectProperty(testoe, oe)).toBeFalsy();
	});

});
