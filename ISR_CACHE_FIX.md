# ISR Cache-Control Headers Fix

## Issue Description

The GitHub issue #343 reported that ISR (Incremental Static Regeneration) page data was randomly getting incorrect Cache-Control headers. This was causing inconsistent caching behavior for static pages.

## Root Cause Analysis

The issue was caused by:

1. **Conflicting header configurations**: The `next-secure-headers` package and `@wpengine/atlas-next` wrapper were interfering with Next.js's default ISR caching behavior.

2. **Missing explicit Cache-Control headers**: ISR pages didn't have proper Cache-Control headers defined, leading to inconsistent caching behavior.

3. **Header precedence issues**: Multiple header configurations were competing, causing random incorrect headers.

## Solution Implemented

### 1. Updated `next.config.mjs`

Added explicit Cache-Control headers for ISR pages in the Next.js configuration:

```javascript
async headers() {
  return [
    // ... existing secure headers
    {
      source: "/blog/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=60, stale-while-revalidate=300",
        },
      ],
    },
    {
      source: "/docs/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=600, stale-while-revalidate=3600",
        },
      ],
    },
    // ... other headers
  ];
}
```

### 2. Created `middleware.ts`

Added a Next.js middleware to handle Cache-Control headers more precisely:

- **Blog posts**: `public, max-age=3600, stale-while-revalidate=7200` (1 hour cache, 2 hour stale-while-revalidate)
- **Blog index**: `public, max-age=60, stale-while-revalidate=300` (1 minute cache, 5 minute stale-while-revalidate)
- **Documentation**: `public, max-age=600, stale-while-revalidate=3600` (10 minute cache, 1 hour stale-while-revalidate)
- **Homepage**: `public, max-age=300, stale-while-revalidate=1800` (5 minute cache, 30 minute stale-while-revalidate)

## Benefits

1. **Consistent caching**: All ISR pages now have predictable and appropriate Cache-Control headers
2. **Better performance**: Proper stale-while-revalidate values allow for faster page loads
3. **Reduced server load**: Appropriate cache durations reduce unnecessary regeneration
4. **Improved user experience**: Faster page loads and consistent behavior

## Testing

To verify the fix:

1. Build and deploy the application
2. Check Cache-Control headers for ISR pages using browser dev tools or curl
3. Verify that headers are consistent across requests
4. Test revalidation behavior by updating content and checking cache invalidation

## Cache Strategy

- **Short-lived content** (blog index): 1 minute cache with 5 minute stale-while-revalidate
- **Medium-lived content** (documentation): 10 minute cache with 1 hour stale-while-revalidate  
- **Long-lived content** (blog posts): 1 hour cache with 2 hour stale-while-revalidate
- **Static content** (homepage): 5 minute cache with 30 minute stale-while-revalidate

This strategy balances freshness with performance while ensuring users always get content within a reasonable timeframe.