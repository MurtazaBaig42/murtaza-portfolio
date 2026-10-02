#!/usr/bin/env python3
"""
Lightweight local development server for Murtaza Portfolio with SPA routing.
Serves static files, rewrites /about, /services, /work, etc. directly to /index.html.
"""
import http.server
import socketserver
import sys
import os

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000

SPA_ROUTES = {
    '/about', '/services', '/work', '/process', '/testimonials', '/contact'
}

class SPALocalHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent aggressive browser caching during development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        # Extract clean path without query or hash
        clean_path = self.path.split('?')[0].split('#')[0].rstrip('/')
        
        # SPA route rewrite to index.html
        if clean_path in SPA_ROUTES:
            self.path = '/index.html'
        elif clean_path.startswith('/work/') and not clean_path.endswith('.html'):
            # e.g. /work/autonomous-qa-software-testing-agent -> /work/autonomous-qa-software-testing-agent.html
            html_path = clean_path + '.html'
            if os.path.isfile(os.path.join(self.directory or '.', html_path.lstrip('/'))):
                self.path = html_path

        return super().do_GET()

if __name__ == '__main__':
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    handler = SPALocalHandler
    handler.directory = web_dir

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"\n🚀 Murtaza Portfolio Local Server running at http://localhost:{PORT}")
        print(f"📂 Serving directory: {web_dir}")
        print(f"✨ SPA routing active (/about, /services, /work, /process, /testimonials, /contact)")
        print(f"⏹️  Press Ctrl+C to stop.\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
