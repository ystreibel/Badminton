SHELL = /bin/bash

MAKE := $(MAKE) --no-print-directory

CURRENT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

GIT_VERSION := $(shell git describe --tags --long --always)

NPM_CACHE = $(HOME)/.npm

# Set in your shell OFFLINE = true to have an offline build
OFFLINE = false
ifeq ($(OFFLINE),true)
    NPM_PARAMETERS := --cache-min 9999999
    DOCKER_PARAMETERS :=
else
    DOCKER_PARAMETERS := --pull
endif

DOCKERTAG := latest

BADMINTON_BACKEND_DOCKERREPOSITORY = badminton-api:$(DOCKERTAG)

AWS_REGISTRY = 548987333590.dkr.ecr.eu-west-2.amazonaws.com

BADMINTON_BACKEND_AWS_DOCKERREPOSITORY = $(AWS_REGISTRY)/badminton-api:$(DOCKERTAG)