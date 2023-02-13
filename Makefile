.PHONY: default fix_links lint_markdown

CONTENT_PATH = $(shell pwd)/content
DOCKER_IMAGE = lubieniebieski/markdown_links_to_references

default: fix_links lint_markdown

fix_links:
	docker run --rm -v $(CONTENT_PATH):/input $(DOCKER_IMAGE)

lint_markdown:
	docker run -v $(shell pwd):/workdir davidanson/markdownlint-cli2 "content/**/*.md"