(defproject lattice-proteins "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [quil "2.5.0"]
                 [org.clojure/clojurescript "1.9.293"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.8"]]
  :hooks [leiningen.cljsbuild]

  :cljsbuild
    {:builds {:dev
               {:source-paths ["src"]
               :figwheel true
               :compiler {
                  :output-to "js/lattice-wiggle.js"
                  :output-dir "out"
                  :main "lattice_proteins.core"
                  :optimizations :none
                  :pretty-print true}}
              :deploy
              {:source-paths ["src"]
               :figwheel false
               :compiler
                 {:output-to "js/blog-lattice.js"
                  :output-dir "deploy"
                  :main "lattice_proteins.core"
                  :optimizations :advanced
                  :pretty-print true}}
                  }})
