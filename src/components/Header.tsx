"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Column,
  Logo,
  NavIcon,
  Row,
  ToggleButton,
  Line,
  Text,
} from "@once-ui-system/core";

import { routes, home, about, blog, work, gallery } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive((v) => !v);

  return (
    <Row
      as="header"
      borderBottom="neutral-medium"
      fillWidth
      paddingX="m"
      minHeight="56"
      vertical="center"
      background="page"
      position="sticky"
      top="0"
      zIndex={9}
    >
      <Row gap="4" vertical="center" maxWidth={10}>
        <NavIcon
          isActive={isActive}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isActive}
          hide
          s={{ hide: false }}
        />
        <Logo dark wordmark="/trademarks/wordmark-dark.svg" size="s" href="/" />
        <Logo light wordmark="/trademarks/wordmark-light.svg" size="s" href="/" />
      </Row>

      <Row fillWidth horizontal="center" gap="8" s={{ hide: true }}>
        {routes["/"] && (
          <ToggleButton
            prefixIcon="home"
            href={home.path}
            label={home.label}
            selected={pathname === home.path}
          />
        )}
        {routes["/about"] && (
          <ToggleButton
            prefixIcon="person"
            href={about.path}
            label={about.label}
            selected={pathname === about.path}
          />
        )}
        {routes["/work"] && (
          <ToggleButton
            prefixIcon="grid"
            href={work.path}
            label={work.label}
            selected={pathname.startsWith(work.path)}
          />
        )}
        {routes["/blog"] && (
          <ToggleButton
            prefixIcon="book"
            href={blog.path}
            label={blog.label}
            selected={pathname.startsWith(blog.path)}
          />
        )}
        {routes["/gallery"] && (
          <ToggleButton
            prefixIcon="gallery"
            href={gallery.path}
            label={gallery.label}
            selected={pathname.startsWith(gallery.path)}
          />
        )}
        <Line background="neutral-alpha-medium" vert maxHeight="24" />
        <ThemeToggle />
      </Row>

      <Row hide s={{ hide: false }}>
        <ThemeToggle />
      </Row>

      {isActive && (
        <Column
          top="56"
          left="0"
          position="absolute"
          padding="8"
          fillWidth
          overflowY="auto"
          style={{ maxHeight: "calc(100vh - var(--static-space-56))" }}
          background="surface"
          border="surface"
          radius="l-4"
          gap="4"
        >
          <Text paddingX="2" paddingY="2" onBackground="neutral-weak" variant="label-default-s">
            Navigation
          </Text>
          {routes["/"] && (
            <ToggleButton
              fillWidth
              horizontal="start"
              size="l"
              href={home.path}
              selected={pathname === home.path}
              label={home.label}
            />
          )}
          {routes["/about"] && (
            <ToggleButton
              fillWidth
              horizontal="start"
              size="l"
              href={about.path}
              selected={pathname === about.path}
              label={about.label}
            />
          )}
          {routes["/work"] && (
            <ToggleButton
              fillWidth
              horizontal="start"
              size="l"
              href={work.path}
              selected={pathname.startsWith(work.path)}
              label={work.label}
            />
          )}
          {routes["/blog"] && (
            <ToggleButton
              fillWidth
              horizontal="start"
              size="l"
              href={blog.path}
              selected={pathname.startsWith(blog.path)}
              label={blog.label}
            />
          )}
          {routes["/gallery"] && (
            <ToggleButton
              fillWidth
              horizontal="start"
              size="l"
              href={gallery.path}
              selected={pathname.startsWith(gallery.path)}
              label={gallery.label}
            />
          )}
        </Column>
      )}
    </Row>
  );
};
