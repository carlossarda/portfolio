<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;


class GithubController extends Controller
{
    public function index(Request $request, $nome){
        $githubService = app('Services\Github');

        return response()->json($githubService->find($nome));
    }

    public function data(Request $request){
        $data = $request->input('data');
        $githubService = app('Services\Github');

        return response()->json($githubService->endPoint($data['url']));
    }

    public function repos(Request $request,$nome) {
        $githubService = app('Services\Github');

        return response()->json($githubService->repos($nome));
    }
}