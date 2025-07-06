import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { 
  CustomMDX, 
  ScrollToHash,
  LoadingSpinner,
  ErrorFallback
} from "@/components";
import { 
  Meta, 
  Schema, 
  AvatarGroup, 
  Button, 
  Column, 
  Heading, 
  HeadingNav, 
  Icon, 
  Row, 
  Text 
} from "@once-ui-system/core";
import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import { Metadata } from 'next';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string | string[] };
}): Promise<Metadata> {
  const slugPath = Array.isArray(params.slug) 
    ? params.slug.join('/') 
    : params.slug || '';

  const posts = getPosts(["src", "app", "blog", "posts"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${blog.path}/${post.slug}`,
  });
}

// Define the correct type for Next.js page props
type BlogPageProps = {
  params: { slug: string | string[] };
};

export default async function Blog({ params }: BlogPageProps) {
  const slugPath = Array.isArray(params.slug) 
    ? params.slug.join('/') 
    : params.slug || '';

  const posts = getPosts(["src", "app", "blog", "posts"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars = post.metadata.team?.map((person) => ({
    src: person.avatar,
  })) || [];

  return (
    <Row fillWidth>
      {/* Left spacing */}
      <Row maxWidth={12} hide="m" />
      
      {/* Main content */}
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="xs" gap="l">
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`}
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          
          <Button 
            data-border="rounded" 
            href="/blog" 
            weight="default" 
            variant="tertiary" 
            size="s" 
            prefixIcon="chevronLeft"
          >
            Posts
          </Button>
          
          <Heading variant="display-strong-s">{post.metadata.title}</Heading>
          
          <Row gap="12" vertical="center">
            {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
            <Text variant="body-default-s" onBackground="neutral-weak">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
            </Text>
          </Row>
          
          <Column as="article" fillWidth>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <CustomMDX>{post.content}</CustomMDX>
              </Suspense>
            </ErrorBoundary>
          </Column>
          
          <ScrollToHash />
        </Column>
      </Row>
      
      {/* Table of contents sidebar */}
      <Column 
        maxWidth={12} 
        paddingLeft="40" 
        fitHeight 
        position="sticky" 
        top="80" 
        gap="16" 
        hide="m"
      >
        <Row
          gap="12"
          paddingLeft="2"
          vertical="center"
          onBackground="neutral-medium"
          textVariant="label-default-s"
        >
          <Icon name="document" size="xs" />
          On this page
        </Row>
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}
