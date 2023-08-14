.PHONY: default fix_links lint_markdown

CONTENT_PATH := content

default: fix_links lint_markdown

fix_links:
	markdown-tools links_as_references $(CONTENT_PATH)

lint_markdown:
	markdownlint-cli2 --fix $(CONTENT_PATH)/**/*.md
