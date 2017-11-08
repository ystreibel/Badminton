include Makefile.inc

ALL: clean prepare build docker test ## (default) Build all and launch test. Does NOT deployment!

.PHONY: ALL help print-var purge clean prepare prepare-dev-% build test docs docker deploy-registry escrow

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

print-var: ## Print all var in makefile ink to ease debugging makefile.
	@echo "CURRENT_DIR = $(CURRENT_DIR)"
	@echo "GIT_VERSION = $(GIT_VERSION)"
	@echo "NPM_CACHE = $(NPM_CACHE)"
	@echo "OFFLINE = $(OFFLINE)"
	@echo "NPM_PARAMETERS = $(NPM_PARAMETERS)"
	@echo "DOCKER_PARAMETERS = $(DOCKER_PARAMETERS)"
	@echo "DOCKERTAG = $(DOCKERTAG)"
	@echo "REGISTRY = $(REGISTRY)"
	@echo "BADMINTON_BACKEND_DOCKERREPOSITORY = $(BADMINTON_BACKEND_DOCKERREPOSITORY)"

purge: ## Remove all tmp files. Reset a project.
	@rm -rf node_modules
	@npm $(NPM_PARAMETERS) cache clean $(NPM_CACHE)

clean: ## Clean project.
	@echo "Not implemented !"

prepare: ## Install all dependencies.
	@npm $(NPM_PARAMETERS) install --cache $(NPM_CACHE)

prepare-dev-%: ## Install and run all tools for development.
	@echo "Not implemented !"

build: ## Build submodules.
	@echo "Not implemented !"

test: ## Launch the test locally.
	@echo "Not implemented !"

docs: ## Document components.
	@echo "Not implemented !"

docker: ## Create the docker image.
	@rm -rf docker/delivery && mkdir -p docker/delivery/
	@cp -R src/* docker/delivery/
	@cp -R package.json docker/delivery/
	@(cd docker/; docker build $(DOCKER_PARAMETERS) -t $(BADMINTON_BACKEND_DOCKERREPOSITORY) .)

deploy-registry: ## Deploy the docker image to the registry.
	@docker push $(BADMINTON_BACKEND_DOCKERREPOSITORY)

deploy-aws-registry: ## Deploy the docker image to the aws registry.
	@docker tag $(BADMINTON_BACKEND_DOCKERREPOSITORY) $(BADMINTON_BACKEND_AWS_DOCKERREPOSITORY)
	@docker push $(BADMINTON_BACKEND_AWS_DOCKERREPOSITORY)

escrow : ## Create escrow.
	@echo "Not implemented !"