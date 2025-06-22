.PHONY: build
build:
	docker build . -f Dockerfile -t harbor.rynkix.com/cat-track/cat-track:latest

.PHONY: publish
publish:
	docker push harbor.rynkix.com/cat-track/cat-track:latest
