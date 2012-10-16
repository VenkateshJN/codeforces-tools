//
// Codeforces Library
//
(function(window, namespace, undefined) {
	var REGEXP_PROBLEMSET_PROBLEM = /^[^:]+:\/\/[^\/]+\/problemset\/problem\/([0-9]+)\/([A-Z]+)\/?$/;
	var REGEXP_CONTEST_PROBLEM = /^[^:]+:\/\/[^\/]+\/contest\/([0-9]+)\/problem\/([A-Z]+)\/?$/;

	var Codeforces = {
		/**
		 * URLから問題IDを取得する
		 * 
		 * @param url
		 */
		get_problem_id_from_url : function(url) {
			if (!Codeforces.is_problem_page_url(url)) {
				return false;
			}

			if (REGEXP_PROBLEMSET_PROBLEM.test(url)) {
				return url.match(REGEXP_PROBLEMSET_PROBLEM)[2];
			} else if (REGEXP_CONTEST_PROBLEM.test(url)) {
				return url.match(REGEXP_CONTEST_PROBLEM)[2];
			}

			return false;
		},

		/**
		 * URLからコンテストIDを取得する
		 * 
		 * @param url
		 */
		get_contest_id_from_url : function(url) {
			if (!Codeforces.is_problem_page_url(url)) {
				return false;
			}

			if (REGEXP_PROBLEMSET_PROBLEM.test(url)) {
				return url.match(REGEXP_PROBLEMSET_PROBLEM)[1];
			} else if (REGEXP_CONTEST_PROBLEM.test(url)) {
				return url.match(REGEXP_CONTEST_PROBLEM)[1];
			}

			return false;
		},

		/**
		 * 問題ページのURLかどうか調べる
		 * 
		 * @param url
		 */
		is_problem_page_url : function(url) {
			return REGEXP_PROBLEMSET_PROBLEM.test(url) || REGEXP_CONTEST_PROBLEM.test(url);
		}
	};

	window[namespace] = Codeforces;
})(this, 'Codeforces');
