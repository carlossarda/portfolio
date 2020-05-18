<?php

namespace App\Providers;

use App\Services\Github;
use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;

class GithubServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    private $config = [
        'base_uri' => 'https://api.github.com'
    ];

    public function register()
    {
        $this->app->singleton('Services\Github', function ($app) {
            return new Github(new Client($this->config));
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
