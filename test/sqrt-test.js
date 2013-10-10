test("sqrt", function() {

	equal(My.sqrt(4), 2, "should compute the square root of 4 as 2");

	// throws(function() {
	// 	My.sqrt(-1);
	// }, /sqrt can't work on negative number/, "should throw an exception if given a negative number");

});
