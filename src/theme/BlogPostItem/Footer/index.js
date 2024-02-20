import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import {BlogFooterSignup} from "@site/src/components/cta/blog-footer-signup";
import {useBlogPost} from '@docusaurus/theme-common/internal';

export default function FooterWrapper(props) {
    const {metadata, isBlogPostPage} = useBlogPost();
    return (
        <>
            {isBlogPostPage && <BlogFooterSignup/>}
            <Footer {...props} />
        </>
    );
}
