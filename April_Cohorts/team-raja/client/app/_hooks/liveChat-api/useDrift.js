'use client';

import { useEffect } from 'react';

const useDrift = () => {
	useEffect(() => {
		// Avoid duplicate loading
		if (window.drift) return;

		// Initialization script
		(function () {
			var t = (window.driftt = window.drift = window.driftt || []);
			if (!t.init) {
				if (t.invoked) {
					if (window.console && console.error) {
						console.error('Drift snippet included twice.');
					}
					return;
				}
				t.invoked = true;
				t.methods = ['identify', 'config', 'track', 'reset', 'debug', 'show', 'ping', 'page', 'hide', 'off', 'on'];
				t.factory = function (e) {
					return function () {
						var n = Array.prototype.slice.call(arguments);
						n.unshift(e);
						t.push(n);
						return t;
					};
				};
				t.methods.forEach(function (e) {
					t[e] = t.factory(e);
				});
				t.load = function (t) {
					var e = 3e5,
						n = Math.ceil(new Date() / e) * e,
						o = document.createElement('script');
					o.type = 'text/javascript';
					o.async = true;
					o.crossorigin = 'anonymous';
					o.src = `https://js.driftt.com/include/${n}/${t}.js`;
					var i = document.getElementsByTagName('script')[0];
					i.parentNode.insertBefore(o, i);
				};
			}
		})();
		drift.SNIPPET_VERSION = '0.3.1';
		drift.load('ADD_KEY');

		// Cleanup function to remove script if component unmounts
		return () => {
			const driftElement = document.querySelector('script[src*="driftt"]');
			if (driftElement) {
				driftElement.parentNode.removeChild(driftElement);
			}
			window.drift = undefined;
			window.driftt = undefined;
		};
	}, []);
};

export default useDrift;
