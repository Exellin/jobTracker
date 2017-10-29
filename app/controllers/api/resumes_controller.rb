module Api
  class ResumesController < ApplicationController
    def index
      user = User.find(params[:user_id])
      render json: {
        status: 'success', data: user.resumes
      }, status: :ok
    end

    def create
      resume = Resume.new(resume_params)
      if resume.save
        render json: {
          status: 'success', data: resume
        }, status: :ok
      else
        render json: {
          status: 'error', data: resume, errors: resume.errors
        }, status: :unprocessable_entity
      end
    end

    private

    def resume_params
      params.require(:resume).permit(:file, :user_id)
    end
  end
end
