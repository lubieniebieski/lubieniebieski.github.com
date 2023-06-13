---
{{- $no := substr .Name -3 -}}
{{- $no =  strings.TrimLeft "0" $no | int }}
title: "Bullets #{{ $no }} | Aim, Shoot, Reflect!"
author: "adam nowak"
date: "{{ .Date }}"
slug: "{{ $no }}"
description: "Bullets -- Aim, Shoot, Reflect!"
categories:
  - bullets
  - summary
tags: []
date: {{ .Date }}
---

Welcome to Bullets!
