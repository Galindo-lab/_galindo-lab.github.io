publish:
	emacs -Q --script publish.el
	rm -r ./includes/
	find . -name "*.html~" -type f -delete
