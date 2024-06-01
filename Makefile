.PHONY: default fix_links lint_markdown server clean

CONTENT_PATH := content

default: fix_links lint_markdown

fix_links:
	markdown-tools links_as_references $(CONTENT_PATH)

lint_markdown:
	markdownlint-cli2 --fix $(CONTENT_PATH)/**/*.md

server:
	hugo server --disableFastRender

clean:
	rm -rf $(TMPDIR)/hugo_cache/*

new_bullet:
	@NUM=$$(ls content/bullets/ | sort -n | tail -1); \
	if [ -n "$$NUM" ]; then \
		NEW_NUM=$$((10#$$NUM + 1)); \
		NEW_NUM=$$(printf "%03d" $$NEW_NUM); \
		hugo new bullets/$$NEW_NUM; \
	else \
		echo "Error: Unexpected result."; \
	fi